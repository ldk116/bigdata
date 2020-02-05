var $body = $('body')



$('#gnb').on('mouseenter' ,function(){
	$body.addClass('megamenu')
})

$('#gnb').on('mouseleave' ,function(){
	$body.removeClass('megamenu')
})

$('.toggle-dropmenu').on('click',function(){
	var $this= $(this);
	$this.toggleClass('active')
})
$('.dropmenu div').on('mouseleave',function(){
	var $this= $(this);
	$this.siblings('.toggle-dropmenu').removeClass('active')
})


$('.toggle-tab').on('click',function(){
	var $this= $(this),
		$target= $($this.data('target'));

	if($this.parent('li').is('.active')){
		//
	}
	else{
		$this.parent('li').addClass('active')
		.siblings('li').removeClass('active')
		$target.fadeIn().siblings('.tabpanel').hide()
	}
})


$(document).on('click', '#header #btnSearch', function(e) {
    $body.addClass('search')
});

$(document).on('click', '.search_close', function(e) {
    $body.removeClass('search')
});

$('.recommend .btn').on('click',function(){
	var $this= $(this);

	if($this.parents('.recommend').is('.active')){
		$this.parents('.recommend').removeClass('active')
	}
	else {
		$this.parents('.recommend').addClass('active')
	}
})

$('.recommend .list').on('mouseleave',function(){
	$(this).parents('.recommend').removeClass('active')
})

$('body .tooltip').on('click',function(){
	if(!$(this).is('.on')){
		$(this).addClass('on')
	}
})
$('.tooltip .btn_close').on('click',function(e){
	e.stopPropagation()
	$(this).parents('.tooltip').removeClass('on')
})

$('.full_grid .btn_panel').on('click',function(e){
	e.stopPropagation()
	if($(this).is('.-open')){
		$('.full_grid').addClass('half')
	} else if($(this).is('.-close')){
		$('.full_grid').removeClass('half')
	}
	
})


$(document).on('click', '.btnClose', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
});
$(document).on('click', '.diff_modal .btnClose', function(e) {
    e.preventDefault();
    $('.modal').hide()
});


// select design;
function selectCustom(){
	var x, i, j, selElmnt, a, b, c;
	/* Look for any elements with the class "custom-select": */
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /* For each element, create a new DIV that will act as the selected item: */
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /* For each element, create a new DIV that will contain the option list: */
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  c = this;
	  for (j = 1; j < selElmnt.length; j++) {
	    /* For each option in the original select element,
	    create a new DIV that will act as an option item: */
	    c = document.createElement("DIV");
	    c.innerHTML = selElmnt.options[j].innerHTML;
	    c.addEventListener("click", function(e) {
	        /* When an item is clicked, update the original select box,
	        and the selected item: */
	        var y, i, k, s, h;
	        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
	        h = this.parentNode.previousSibling;
	        for (i = 0; i < s.length; i++) {
	          if (s.options[i].innerHTML == this.innerHTML) {
	            s.selectedIndex = i;
	            h.innerHTML = this.innerHTML;
	            y = this.parentNode.getElementsByClassName("same-as-selected");
	            for (k = 0; k < y.length; k++) {
	              y[k].removeAttribute("class");
	            }
	            this.setAttribute("class", "same-as-selected");
	            break;
	          }
	        }
	        h.click();
	    });
	    b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
	    /* When the select box is clicked, close any other select boxes,
	    and open/close the current select box: */
	    e.stopPropagation();
	    closeAllSelect(this);
	    this.nextSibling.classList.toggle("select-hide");
	    this.classList.toggle("select-arrow-active");
	  });
	  c.addEventListener("mouseleave", function(e) {
	    /* When the select box is clicked, close any other select boxes,
	    and open/close the current select box: */
	    e.stopPropagation();
	    closeAllSelect(this);
	    this.nextSibling.classList.toggle("select-hide");
	    this.classList.toggle("select-arrow-active");
	  });
	}

	function closeAllSelect(elmnt) {
	  /* A function that will close all select boxes in the document,
	  except the current select box: */
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  for (i = 0; i < y.length; i++) {
	    if (elmnt == y[i]) {
	      arrNo.push(i)
	    } else {
	      y[i].classList.remove("select-arrow-active");
	    }
	  }
	  for (i = 0; i < x.length; i++) {
	    if (arrNo.indexOf(i)) {
	      x[i].classList.add("select-hide");
	    }
	  }
	}

	/* If the user clicks anywhere outside the select box,
	then close all select boxes: */
	document.addEventListener("click", closeAllSelect);
}
selectCustom()

$('input._daterangepicker').each(function() {
    var $this = $(this),
        opens = $this.is('._left') ? 'left' : $(this).is('._right') ? 'right' : 'center';
    $this.daterangepicker({
        'showDropdowns': true,
        'autoApply': true,
        ranges: {
            '1개월': [moment().subtract(1, 'month').add(1, 'days'), moment()],
            '3개월': [moment().subtract(3, 'month').add(1, 'days'), moment()],
            '6개월': [moment().subtract(6, 'month').add(1, 'days'), moment()],
            '1년': [moment().subtract(12, 'month').add(1, 'days'), moment()],
            '오늘': [moment(), moment()]
        },
        'locale': {
            'format': 'YYYY/MM/DD',
            'separator': ' ~ ',
            'daysOfWeek': ['일','월','화','수','목','금','토'],
            'monthNames': ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            'firstDay': 1
        },
        'showCustomRangeLabel': false,
        'alwaysShowCalendars': true,
        'opens': opens,
        'autoUpdateInput': false
    }, function(start_date, end_date) {
        $this.val(start_date.format('YYYY-MM-DD')+' ~ '+end_date.format('YYYY-MM-DD'));
    });
});

$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	showMonthAfterYear: true,
	yearSuffix: '년'
});
$('.datepicker').datepicker({
    dateFormat: 'yy-mm-dd',
    // buttonImage: "../../assets/img/common/icon_cal.png",
    // buttonImageOnly: true,
    // buttonText: "Select date"
});