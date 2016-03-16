/*$(document).ready(function() {
    /!*$("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });*!/
});*/

 //function for clone input fields for standard query creation
$(document).ready(function() {

    // add multiple select / deselect functionality
    $("#selectAll").click(function () {
          $('.case').prop('checked', this.checked);
    });
    // if all checkbox are selected, check the selectall checkbox
    // and viceversa
    $(".case").click(function(){
        if($(".case").length == $(".case:checked").length) {
            $("#selectAll").prop("checked", "checked");
        } else {
            $("#selectAll").removeProp("checked");
        }
    });

    //if operator selector changed
    $("#standard_builder").change(function(){
        //find option selected
        var type = $(this).find("option:selected").val();
        //if not undefines
        if(type != undefined){
            //clone keyword box and place after last operator selector
            $("#standard_keywords").clone().insertAfter('#standard_builder:last-child').val('');
            //clone operator box and place after new keyword box, true passes on action listener to new child
            $($(this)).clone(true).insertAfter('#standard_keywords:last-child');
            //disable action listener for current operator selector
            $(this).off();
        }
    });

    //delete table row if deletebutton with id containing deleteQuery
    $("[id*='deleteQuery']").click(function(){
        //var of delete buttons td parent
        var td=$(this).parent();
         //var of td tr parent
        var tr=td.parent();

        //fade and remove row
        tr.fadeOut(400, function(){
            tr.remove()
        })
    });

    $('textarea').numberedtextarea({
        // if true Tab key creates indentation
        allowTabChar: true
    });

});
