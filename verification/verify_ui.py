import time
from playwright.sync_api import sync_playwright

def verify_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            time.sleep(2)  # Wait for load

            # Check for default cursor presence (indirectly by checking absence of cursor-none)
            # The root div should not have cursor-none
            root_div = page.locator("div.bg-black.text-white.overflow-x-hidden")
            class_attr = root_div.get_attribute("class")
            print(f"Root classes: {class_attr}")
            if "cursor-none" in class_attr:
                print("FAIL: cursor-none class still present")
            else:
                print("PASS: cursor-none class removed")

            # Check for CustomCursor component
            custom_cursor = page.locator("div.fixed.top-0.left-0.w-8.h-8")
            if custom_cursor.count() > 0:
                print("FAIL: CustomCursor element found")
            else:
                print("PASS: CustomCursor element not found")

            # Check SelectedWork button
            view_btn = page.locator("section#work button", has_text="View Case Study").first
            if view_btn.is_visible():
                print("PASS: View Case Study button visible")
                print(f"Button classes: {view_btn.get_attribute('class')}")
                # Check for focus styles
                if "focus:outline-none" in view_btn.get_attribute("class"):
                    print("PASS: Focus styles present")
                else:
                    print("FAIL: Focus styles missing")
            else:
                print("FAIL: View Case Study button not found")

            page.screenshot(path="verification/verification.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_ui()
