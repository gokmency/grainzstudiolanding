from playwright.sync_api import sync_playwright

def verify_hero():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the local dev server
        print("Navigating to http://localhost:8080")
        page.goto("http://localhost:8080")

        # Wait for the video element to be attached to DOM
        video = page.locator("video")
        video.wait_for(state="attached")

        # Take screenshot of the hero section
        page.screenshot(path="verification/hero_visual_check.png")
        print("✅ Screenshot saved to verification/hero_visual_check.png")

        browser.close()

if __name__ == "__main__":
    verify_hero()
