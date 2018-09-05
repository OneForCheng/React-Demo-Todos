class AppView {

  constructor() {
    this.displayType = "All";
  }

  setDisplay(displayType) {
    this.displayType = displayType;
  }

  display() {
    if (this.displayType === "All") {
      $('.todo-list li').each(function () {
        if ($(this).hasClass('hidden')) {
          $(this).removeClass('hidden');
        }
      });
    } else if (this.displayType === "Active") {
      $('.todo-list li').each(function () {
        if ($(this).hasClass('completed')) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });
    } else {
      $('.todo-list li').each(function () {
        if ($(this).hasClass('completed')) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      });
    }
    $(".todo-count strong").text(this.getActiveCount());

    if (this.getCompletedCount() > 0) {
      $(".clear-completed").removeClass('hidden');
    } else {
      $(".clear-completed").addClass('hidden');
    }
  }

  getCompletedCount() {
    let count = 0;
    $('.todo-list li').each(function () {
      if ($(this).hasClass('completed')) {
        count += 1;
      }
    });
    return count;
  }

  getActiveCount() {
    let count = 0;
    $('.todo-list li').each(function () {
      if (!$(this).hasClass('completed')) {
        count += 1;
      }
    });
    return count;
  }

  completeAll() {
    $('.toggle').each(function () {
      $(this).removeAttr('checked');
      $(this).click();
    });
  }

  cancelAll() {
    $('.toggle').each(function () {
      $(this).attr('checked', 'checked');
      $(this).click();
    });
  }


  removeCompletedAll() {
    $('.todo-list li').each(function () {
      if ($(this).hasClass('completed')) {
        $(this).remove();
      }
    });
    this.display();
  }
}

var appView = new AppView();

(function (window) {
  'use strict';

  $(".new-todo").on("keydown", function (e) {
    // 兼容FF和IE和Opera
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
      append($(".new-todo").val());
      $(".new-todo").val('');
      appView.display();
    }
  });

  $(".todo-list").on('click', '.toggle', function () {
    if ($(this).prop('checked')) {
      $(this).closest("li").addClass('completed');
    } else {
      $(this).closest("li").removeClass('completed');
    }
    appView.display();
  });

  $(".todo-list").on('click', '.destroy', function () {
    $(this).closest("li").remove();
    appView.display();
  });

  $('#toggle-all').click(function (event) {
    if ($(this).prop('checked')) {
      appView.completeAll();
    } else {
      appView.cancelAll();
    }
  });
  $(".filters a").click(function (event) {
    $(".filters a").each(function () {
      if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
      }
    });
    $(this).addClass("selected");
    appView.setDisplay($(this).text());
    appView.display();
  });

  $(".clear-completed").click(function () {
    appView.removeCompletedAll();
  });

  //editing
  $(".todo-list").on("dblclick", "li", function () {
    $(this).addClass('editing');
  });

  $(".todo-list").on("blur", ".edit", function () {
    let li = $(this).closest("li");
    li.removeClass('editing');
    li.find("label").html($(this).val());
  });

})(window);


function append(text) {
  let note = '<li>';
  note += '<div class="view">';
  note += '<input class="toggle" type="checkbox">';
  note += '<label>' + text + '</label>';
  note += '<button class="destroy"></button>';
  note += '</div>';
  note += '<input class="edit" value="' + text + '">';
  note += '</li>';
  $(".todo-list").append(note);
}