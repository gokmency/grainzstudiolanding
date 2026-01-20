
from playwright.sync_api import sync_playwright

def verify_hero():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            page.wait_for_selector("video", state="visible", timeout=10000)

            # Take screenshot of Hero
            page.screenshot(path="verification/hero.png")

            # Check for overlay (should be gone)
            overlay = page.query_selector(".bg-black\/60")
            if overlay:
                print("Overlay found! (Unexpected)")
            else:
                print("No overlay found. (Expected)")

            # Scroll to Services
            page.evaluate("window.scrollTo(0, 1000)")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/services.png")

            # Scroll to Work
            page.evaluate("window.scrollTo(0, 2000)")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/work.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_hero()
