from playwright.sync_api import sync_playwright
import sys

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

        # 1. Verify Source
        # Get the inner HTML or source attribute to check file
        content = video.inner_html()
        src_attr = video.get_attribute("src")

        # It might be in a <source> tag inside
        source_tag = video.locator("source")
        source_src = ""
        if source_tag.count() > 0:
            source_src = source_tag.first.get_attribute("src")

        print(f"Video Src: {src_attr}")
        print(f"Source Tag Src: {source_src}")

        if "dunethemebg.mp4" not in str(src_attr) and "dunethemebg.mp4" not in str(source_src):
            print("❌ FAILURE: Video source is not dunethemebg.mp4")
            sys.exit(1)
        else:
            print("✅ SUCCESS: Video source is dunethemebg.mp4")

        # 2. Verify Fallback Style
        style = video.get_attribute("style")
        print(f"Style attribute: {style}")
        if "background-color" in str(style) or "background" in str(style):
             print("✅ SUCCESS: Background style present")
        else:
             print("❌ FAILURE: Missing background style fallback")
             sys.exit(1)

        # 3. Verify Opacity Class (Optimization)
        # Should NOT have opacity-0
        classes = video.get_attribute("class")
        print(f"Classes: {classes}")
        if "opacity-0" in classes:
             print("❌ FAILURE: Video still has opacity-0 class (optimization not applied)")
             sys.exit(1)
        else:
             print("✅ SUCCESS: opacity-0 removed")

        # Take screenshot
        page.screenshot(path="verification/hero_verification.png")
        print("✅ Screenshot saved to verification/hero_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_hero()
