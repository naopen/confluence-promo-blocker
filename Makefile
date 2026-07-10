.PHONY: zip clean

zip:
	zip -r confluence-promo-blocker.zip manifest.json content.js icons/

clean:
	rm -f confluence-promo-blocker.zip
