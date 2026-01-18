from playwright.sync_api import sync_playwright, expect

def verify_grainz_studio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile View Verification
        context_mobile = browser.new_context(viewport={'width': 375, 'height': 812})
        page_mobile = context_mobile.new_page()
        page_mobile.goto("http://localhost:3000")

        # Wait for hero content
        expect(page_mobile.get_by_text("Build & Scale")).to_be_visible(timeout=10000)
        expect(page_mobile.get_by_text("Form & Function")).to_be_visible()

        # Take mobile screenshot
        page_mobile.screenshot(path="verification/mobile_view.png")
        print("Mobile view verified")

        # Desktop View Verification
        context_desktop = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page_desktop = context_desktop.new_page()
        page_desktop.goto("http://localhost:3000")

        # Wait for hero content
        expect(page_desktop.get_by_text("Build & Scale")).to_be_visible(timeout=10000)

        # Hover interaction test (Development side)
        dev_side = page_desktop.locator("text=The Engineer").first
        dev_side.hover()
        page_desktop.wait_for_timeout(1000) # Wait for animation
        page_desktop.screenshot(path="verification/desktop_hover_dev.png")
        print("Desktop dev hover verified")

        # Scroll to Development Section
        page_desktop.get_by_role("link", name="Development").click()
        page_desktop.wait_for_timeout(1000) # Wait for scroll
        page_desktop.screenshot(path="verification/desktop_dev_section.png")
        print("Desktop dev section verified")

        browser.close()

if __name__ == "__main__":
    verify_grainz_studio()
