function getModString(nodeClass, mod, value) {
  if (value === true) return `${nodeClass}_${mod}`;

  return `${nodeClass}_${mod}_${value}`;
}

function appendClasses(node, obj) {
  const nodeClass = obj.elem
    ? `${obj.block}__${obj.elem}` : obj.block;
  node.classList.add(nodeClass);

  if (obj.mix) {
    if (Array.isArray(obj.mix)) {
      obj.mix.forEach(block => appendClasses(node, block));
    } else {
      appendClasses(node, obj.mix);
    }
  }

  if (obj.elemMods) {
    for (const [mod, value] of Object.entries(obj.elemMods)) {
      node.classList.add(getModString(nodeClass, mod, value));
    }
  } else if (obj.mods) {
    for (const [mod, value] of Object.entries(obj.mods)) {
      node.classList.add(getModString(nodeClass, mod, value));
    }
  }
}

function parseBEMNode(obj) {
  const node = document.createElement(obj.tag ? obj.tag : 'div');
  appendClasses(node, obj);
  if (obj.content) {
    if (Array.isArray(obj.content)) {
      obj.content.forEach(block => node.appendChild(parseBEMNode(block)));
    } else {
      node.appendChild(parseBEMNode(obj.content));
    }
  }

  return node;
}

/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/
export default function (obj) {
  if (!obj) return '';

  let html;

  if (Array.isArray(obj)) {
    html = obj.reduce((acc, cur) => (acc + parseBEMNode(cur).outerHTML), '');
  } else {
    html = parseBEMNode(obj).outerHTML;
  }

  return html;
}
