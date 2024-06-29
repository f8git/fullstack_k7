class F8 {
  static create(tag, callback) {
    class Component extends HTMLElement {
      registry = {
        length: this.handleLength,
        event: this.handleEvent,
      };

      connectedCallback() {
        var _this = this;
        console.log(this);
        var shadowRoot = this.attachShadow({
          mode: "open",
        });
        shadowRoot.innerHTML = callback();
        console.log(shadowRoot);
        _this.resolveAttributes(shadowRoot);
      }
      resolveAttributes(elementWrap) {
        var _this = this;
        if (elementWrap.children && elementWrap.children.length) {
          Array.from(elementWrap.children).forEach(function (element) {
            Array.from(element.attributes).forEach(function (attribute) {
              console.log(attribute);
              if (attribute.name.startsWith("x-")) {
                var attrName = attribute.name.replace("x-", "");
                var attrValue = attribute.nodeValue;

                typeof _this.registry[attrName] === "function" &&
                  _this.registry[attrName]({
                    element: element,
                    value: attrValue,
                  });
              }
              if (attribute.name.startsWith("@")) {
                var eventName = attribute.name.replace("@", "");
                console.log(attribute.nodeValue);
                typeof _this.registry["event"] === "function" &&
                  _this.registry["event"]({
                    element: element,
                    eventName: eventName,
                    value: attribute.nodeValue,
                  });
              }
            });
            _this.resolveAttributes(element);
          });
        }
      }

      handleLength(obj) {
        var element = obj.element;
        var value = obj.value;

        for (var i = 0; i < value; i++) {
          var elementClone = element.cloneNode(true);
          element.parentElement.append(elementClone);
        }
        element.remove();
      }
      handleEvent(obj) {
        var eventName = obj.eventName;
        var value = obj.value;
        var element = obj.element;
        element.addEventListener(eventName, function () {
          // console.log(value);
          //   Function(value)();
          var funcCreator = Function(value);
          funcCreator.call(element);
        });
      }
    }
    customElements.define(tag, Component);
  }
}

F8.create("hello-world", function () {
  return `
  <div class="content">
    <h1 x-length="2" abc="12" @click="this.style.color = 'red'">Hello Ae F8</h1>
    <h2 @dblClick="console.log('a hi hi')">bbbb</h2>
    <button @click="console.log(123123)">Click me</button>
    <ul>
      <li x-length="3">Item ${i}</li>
    </ul>

  </div>
  
  `;
});

// F8.create("todo-app", function () {
//   return `
//   <div class="content">
//     <h1 abc="12" @mouseover="this.style.color = 'cyan'">Hello Ae F8</h1>
//     <h2 @dblClick="console.log('a hi hi')">bbbb</h2>
//     <button @click="console.log(123123)">Click me</button>
//   </div>
//   `;
// });
