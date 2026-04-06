window.addEventListener("DOMContentLoaded", function () {
  //alert("Modal을 호출하기 위한 생성자가 선언되지 않았습니다.");
  if (Modal.initFlag != true) {
    this.alert(
      "Modal을 호출하기 위한 생성자가 선언되지 않았습니다.\n사용방법은 콘솔창을 참조하세요."
    );
    console.log(
      "============================== modal dialog 호출 방법 =============================="
    );
    console.log(
      "1. DOMContentLoaded 호출 시점에서 [ modal = new Modal(); ]와 같은 형태로 모달을 생성해야 합니다."
    );
    console.log(
      "2. ※ new Modal() 로 변수를 생성할 때 함수 내부에서 변수 스코프(var, let, const)를 선언하면 전역으로 사용할 수 없습니다."
    );
    console.log(
      "3. 여러개의 모달을 생성할 경우 변수 명(e.g. var modal1, modal2)만 다르게 해서 생성할 수 있습니다."
    );
    console.log(
      "4. setWidth, setHeight, setTitle, setContent, setFooter, setModalDisplayBtnIds 를 통해 모달의 내용을 변경 할 수 있습니다."
    );
    console.log(
      "5. show, hide를 통해 모달을 표시 및 비표시 할 수 있습니다. (e.g. modal.show())"
    );
    console.log(
      "===================================================================================="
    );
  }
});

const Modal = (function () {
  let html = window.atob(
    "PGRpdiBjbGFzcz0ibW9kYWwiPjxkaXYgY2xhc3M9Im1vZGFsX2lubmVyIj48ZGl2IGNsYXNzPSJtb2RhbF9jb250ZW50Ij48ZGl2IGNsYXNzPSJtb2RhbF9oZWFkZXIiPjxzcGFuIGNsYXNzPSJjbG9zZSI+JnRpbWVzOzwvc3Bhbj48ZGl2IGNsYXNzPSJtb2RhbF90aXRsZSI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibW9kYWxfYm9keSI+PC9kaXY+PGRpdiBjbGFzcz0ibW9kYWxfZm9vdGVyIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4="
  );

  class Modal {
    constructor() {
      Modal.initFlag = !Modal.initFlag;

      this.node = document.createElement("div");

      this.node.innerHTML = html;

      this.node = this.node.children[0];

      document.body.append(this.node);

      let that = this;

      this.node
        .querySelector(".modal_header")
        .querySelector(".close")
        .addEventListener("click", function () {
          console.log("닫힘!");
          that.hide();
        });
    }

    setWidth(width) {
      this.node.querySelector(".modal_content").style.width = width;

      return this;
    }

    setHeight(height) {
      this.node.querySelector(".modal_content").style.height = height;

      return this;
    }

    setHeader(header) {
      if (header == null) {
        this.node.querySelector(".modal_header").style.display = "none";
      } else {
        this.node.querySelector(".modal_header").innerHTML = header;
      }

      return this;
    }

    setTitle(title) {
      this.node.querySelector(".modal_title").innerHTML =
        "<h2>" + title + "</h2";

      return this;
    }

    setContent(content) {
      this.node.querySelector(".modal_body").innerHTML = content;

      return this;
    }

    setFooter(footer) {
      this.node.querySelector(".modal_footer").innerHTML = footer;
    }

    setPositiveButton(text, callback) {
      let negNode = null;

      this.posFlag = true;

      if (this.negFlag) {
        negNode = this.node
          .querySelector(".modal_footer")
          .querySelector(".modal_confirm.neg");
      }

      if (
        this.node
          .querySelector(".modal_footer")
          .querySelector(".modal_confirm") != null
      ) {
        this.node.querySelector(".modal_footer").innerHTML = "";
      }

      let tmpDiv = document.createElement("div");

      tmpDiv.innerHTML =
        "<span class='btn btn_style1 modal_confirm pos'>" + text + "</span>";

      if (callback != null && typeof callback == "function") {
        tmpDiv.childNodes[0].addEventListener("click", callback);
      } else {
        console.log("regist fail callback listener");
      }

      if (this.negFlag && negNode != null) {
        this.node.querySelector(".modal_footer").append(negNode);
      }

      this.node.querySelector(".modal_footer").append(tmpDiv.childNodes[0]);
    }

    setNegativeButton(text, callback) {
      let posNode = null;

      this.negFlag = true;

      if (this.posFlag) {
        posNode = this.node
          .querySelector(".modal_footer")
          .querySelector(".modal_confirm.pos");
      }

      if (
        this.node
          .querySelector(".modal_footer")
          .querySelector(".modal_confirm") != null
      ) {
        this.node.querySelector(".modal_footer").innerHTML = "";
      }

      let tmpDiv = document.createElement("div");

      tmpDiv.innerHTML =
        "<span class='btn btn_style1 modal_confirm neg'>" + text + "</span>";

      if (callback != null && typeof callback == "function") {
        tmpDiv.childNodes[0].addEventListener("click", callback);
      } else {
        console.log("regist fail callback listener");
      }

      this.node.querySelector(".modal_footer").append(tmpDiv.childNodes[0]);

      if (this.posFlag && posNode != null) {
        this.node.querySelector(".modal_footer").append(posNode);
      }
    }

    setModalDisplayBtnIds(ids) {
      if (ids == null || typeof ids != "object" || ids.length == null) {
        throw new Error(
          '버튼을 표시하기 위한 아이디는 스트링 배열 형태로 ["id1", "id2"] 와 같이 넘겨주여야 합니다.'
        );
      }

      let that = this;

      for (let id of ids) {
        if (typeof id == "string") {
          document.getElementById(id).addEventListener("click", function () {
            that.show();
          });
        }
      }
    }

    show() {
      this.node.style.display = "table";
    }

    hide() {
      this.node.style.display = "none";
    }
  }

  return Modal;
})();
