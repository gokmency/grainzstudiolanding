
from playwright.sync_api import sync_playwright

def verify_grainz_studio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local server
        try:
            page.goto("http://localhost:8080", timeout=30000)

            # Wait for content to load (check for Hero text)
            page.wait_for_selector("text=Design and build digital experiences")

            # Take a screenshot of the Hero section
            page.screenshot(path="verification/hero.png")
            print("Hero screenshot taken.")

            # Scroll down to see other sections and take screenshot
            page.evaluate("window.scrollTo(0, 1000)")
            page.wait_for_timeout(2000) # Wait for animations
            page.screenshot(path="verification/services.png")
            print("Services screenshot taken.")

             # Scroll down to see other sections and take screenshot
            page.evaluate("window.scrollTo(0, 2000)")
            page.wait_for_timeout(2000) # Wait for animations
            page.screenshot(path="verification/work.png")
            print("Work screenshot taken.")

            # Take a full page screenshot
            page.screenshot(path="verification/full_page.png", full_page=True)
            print("Full page screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_grainz_studio()
