import os
import json

import mistune
from bs4 import BeautifulSoup


def md_to_html(filename):
    with open('../'+filename, 'r') as f:
        content = f.read()
    soup = BeautifulSoup(mistune.markdown(content), 'html.parser')
    return soup


def page_to_json(page_contents, fname):
    page_contents['document_URL'] = 'Dialogue_FAQ'
    with open(fname, "w", encoding="utf-8") as fp:
        json.dump(page_contents, fp, indent=4, ensure_ascii=False)


def files_to_page(md_files):
    page_contents = {}

    for f in md_files:
        soup = md_to_html(f)
        title = soup.find('h2').get_text()
        plaintext = [text.get_text() for text in soup.find_all()]
        html = soup.prettify()

        page_contents[title] = {
            "plaintext": plaintext,
            "html": html,
            "URL": f,
        }

    return page_contents


if __name__ == "__main__":
    all_files = os.listdir('..')
    md_files = [f for f in all_files if f.endswith('.md')]
    fr_files = [f for f in md_files if f.endswith('fr.md')]
    en_files = [f for f in md_files if f not in fr_files]

    fr_pages = files_to_page(fr_files)
    en_pages = files_to_page(fr_files)

    page_to_json(fr_pages, 'dialogue_faq_fr.json')
    page_to_json(en_pages, 'dialogue_faq_en.json')
