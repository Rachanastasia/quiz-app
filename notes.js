
  /*$(function(){
    $(‘#js-shopping-list-form’).submit(function(event) {
      event.preventDefault();
      const listItem = $(‘.js-shopping-list-entry’).val();
      $(‘#shopping-list-entry’).val(‘’);*/
      $(‘.shopping-list’).append(
        `<li>
          <span class=“shopping-item”>${listItem}</span>
          <div class=“shopping-item-controls”>
            <button class=“shopping-item-toggle”>
              <span class=“button-label”>check</span>
            </button>
            <button class=“shopping-item-delete”>
              <span class=“button-label”>delete</span>
            </button>
          </div>
        </li>`);
   // });

   /*
    $(‘.shopping-list’).on(‘click’, ‘.shopping-item-delete’, function(event) {
      $(this).closest(‘li’).remove();
    });
    $(‘.shopping-list’).on(‘click’, ‘.shopping-item-toggle’, function(event) {
      $(this).closest(‘li’).find(‘.shopping-item’).toggleClass(‘shopping-item__checked’);
    });
  });

  */
  // Create items, Render HTML, Render Items, complete and delete function
  function generateHTML(){
  let html = [];
    for(let i = 0; i < store.length; i ++){
      const checkedClass = store[i].completed ? ‘shopping-item_checked’
      html.push;
      <li>
      <span class=“shopping-item”>${store[i].name}
      </span>
      <div class=“shopping-item-controls”>
        <button class=“shopping-item-toggle”>
          <span class=“button-label”>check</span>
        </button>
        <button class=“shopping-item-delete”>
          <span class=“button-label”>delete</span>
        </button>
      </div>
    </li>};
    }
    return html;
  }
  function renderList(){
    let html = generateHTML();
    console.log(html);
    $($.‘shopping-list’).html(html);
  }
  function main (){
    renderList();
    $(#.“js-shopping-list-form”).submit(function(event){
      event.preventDefault();
      let item = $(“shopping-list-item-entry”).val()
    store.push({name:item, completed:false});
    renderList();
    })
    function deleteItem(){
      console.log($this).parent());
      alert(“delete”);
      renderList();
    }
    function completeItem(){
      console.log($this).parent());
      alert(“complete”);
      renderList();
    }
    $(‘shopping-list’).on(“click”, “.shopping-item-delete”, completeItem);
    $(‘shopping-list’).on(“click”, “.shopping-item-delete”, deleteItem);
    })
  }
  {main}