
from playwright.sync_api import sync_playwright
import time

def verify_grainz_studio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local server
        try:
            page.goto("http://localhost:8080", timeout=30000)
            page.set_viewport_size({"width": 1280, "height": 800})

            # Wait for content to load
            page.wait_for_selector("text=Design and build digital experiences")

            # Scroll down gradually to trigger animations
            for i in range(10):
                page.mouse.wheel(0, 800)
                page.wait_for_timeout(500)

            # Take a full page screenshot
            page.screenshot(path="verification/full_page_scrolled.png", full_page=True)
            print("Full page screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_grainz_studio()
