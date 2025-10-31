# 사용법: python3 qr_generate.py "https://your-final-url.example/"
import sys
import qrcode

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 qr_generate.py <URL>")
        exit(1)
    url = sys.argv[1]
    img = qrcode.make(url)
    img.save("qr.png")
    print("Saved qr.png")
