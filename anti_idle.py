"""
anti_idle.py
============
Keeps your system from going idle while a target process is running.
Randomly alternates between mouse jiggle and a harmless keypress (Shift)
so activity looks natural to trackers.

Usage:
    python anti_idle.py --process "Hubstaff" --interval 50 --verbose
    python anti_idle.py --always --interval 45 --verbose

Requirements:
    pip install pyautogui psutil
"""

import argparse
import time
import random
import sys

try:
    import pyautogui
    import psutil
except ImportError:
    print("[ERROR] Missing dependencies. Run:")
    print("        pip install pyautogui psutil")
    sys.exit(1)

pyautogui.FAILSAFE = False

# Keys that are safe to press and won't affect anything
SAFE_KEYS = ['shift', 'ctrl', 'alt', 'capslock']


def is_process_running(name: str) -> bool:
    name_lower = name.lower()
    for proc in psutil.process_iter(['name']):
        try:
            if name_lower in proc.info['name'].lower():
                return True
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass
    return False


def jiggle(pixels: int = 2):
    """Move mouse by tiny random offset and snap back."""
    dx = random.randint(-pixels, pixels)
    dy = random.randint(-pixels, pixels)
    pyautogui.moveRel(dx, dy, duration=0.1)
    time.sleep(0.05)
    pyautogui.moveRel(-dx, -dy, duration=0.1)


def press_key():
    """Press and release a harmless modifier key."""
    key = random.choice(SAFE_KEYS)
    pyautogui.keyDown(key)
    time.sleep(random.uniform(0.05, 0.12))
    pyautogui.keyUp(key)
    return key


def do_activity(verbose: bool, ts: str):
    """Randomly pick mouse jiggle or keypress — looks more natural."""
    action = random.choice(['mouse', 'mouse', 'key'])  # 2:1 ratio mouse:key

    if action == 'mouse':
        jiggle()
        if verbose:
            print(f"[{ts}] Mouse jiggled")
    else:
        key = press_key()
        if verbose:
            print(f"[{ts}] Key pressed: {key}")


def run(process_name: str, interval: int, always: bool, verbose: bool):
    print(f"[anti_idle] Watching for process : '{process_name}'")
    print(f"[anti_idle] Jiggle interval       : {interval}s")
    print(f"[anti_idle] Always mode            : {always}")
    print(f"[anti_idle] Actions                : mouse jiggle + key press (random)")
    print(f"[anti_idle] Press Ctrl+C to stop.\n")

    last_action = 0.0

    try:
        while True:
            now = time.time()
            active = always or is_process_running(process_name)

            if active and (now - last_action) >= interval:
                ts = time.strftime("%H:%M:%S")
                do_activity(verbose, ts)
                last_action = now
            elif not active and verbose:
                ts = time.strftime("%H:%M:%S")
                print(f"[{ts}] Process not found — waiting...")

            time.sleep(5)

    except KeyboardInterrupt:
        print("\n[anti_idle] Stopped.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Anti-idle watchdog — mouse jiggle + keypress to prevent idle detection."
    )
    parser.add_argument(
        "--process", "-p",
        default="",
        help="Process name to watch (partial match). Ignored if --always is set."
    )
    parser.add_argument(
        "--interval", "-i",
        type=int,
        default=50,
        help="Seconds between each activity (default: 50)"
    )
    parser.add_argument(
        "--always",
        action="store_true",
        help="Run regardless of whether target process is detected"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Print a log line on every action"
    )

    args = parser.parse_args()

    if not args.always and not args.process:
        print("[ERROR] Provide --process <name> or use --always")
        parser.print_help()
        sys.exit(1)

    run(
        process_name=args.process,
        interval=args.interval,
        always=args.always,
        verbose=args.verbose,
    )