import grapesjs from "grapesjs";
import Editor = grapesjs.Editor;
import {basicCategory} from "../consts";

export default function addLanguageSelect(editor: Editor) {
    const components = editor.Components
    const type = "language-select"
    components.addType(type, {
        model: {
            defaults: {
                tagName: "select",
                resizable: true,
                name: "language",
                attributes: {
                  name: "language"
                },
                content: "<option value='ko'>한국어</option><option value='en'>영어</option><option value='ja'>일본어</option><option value='zh'>중국어(간체)</option>"
            }
        }
    })
    const bm = editor.BlockManager;
    bm.add(type, {
        category: basicCategory,
        label: "언어 선택박스",
        media: `<svg class="svg-width" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"><path d="M9.17154 11.508L7.75732 10.0938L12 5.85113L16.2426 10.0938L14.8284 11.508L12 8.67956L9.17154 11.508Z" fill="currentColor"></path><path d="M9.17154 12.492L7.75732 13.9062L12 18.1489L16.2426 13.9062L14.8284 12.492L12 15.3204L9.17154 12.492Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill="currentColor"></path></svg>`,
        content: {
            type: type
        }
    });
}