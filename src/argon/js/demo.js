// $(document).ready(function(){
//     // $('#datatable-buttons').DataTable({
//     //     "destroy": true,
//     //     "pagingType" : 'numbers',
//     //     "pageLength" : 10,
//     //     "processing" : false
//     //   })
// $('#datatable-basic').DataTable().destroy();
// $('#datatable-basic').DataTable({
//         "destroy": true,
//         "pagingType" : 'numbers',
//         "pageLength" : 10,
//         "processing" : false
//       })
      
// } );
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
//   setTimeout(function () {
//     {var e,a=$("#datatable-buttons");a.length&&(e={lengthChange:!1,dom:"Bfrtip",buttons:["copy","print"],language:{paginate:{previous:"<i class='fas fa-angle-left'>",next:"<i class='fas fa-angle-right'>"}}},a.on("init.dt",function(){$(".dt-buttons .btn").removeClass("btn-secondary").addClass("btn-sm btn-default")}).DataTable(e))}
//   }, 3000);

// //   DatatableButtons=function(){var e,a=$("#datatable-buttons");a.length&&(e={lengthChange:!1,dom:"Bfrtip",buttons:["copy","print"],language:{paginate:{previous:"<i class='fas fa-angle-left'>",next:"<i class='fas fa-angle-right'>"}}},a.on("init.dt",function(){$(".dt-buttons .btn").removeClass("btn-secondary").addClass("btn-sm btn-default")}).DataTable(e))}