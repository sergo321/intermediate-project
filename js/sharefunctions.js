function displayModal(title, text, icon) {
    Swal.fire({ title, text, icon });
  }
  
  function displayToast(title, icon, color, time = 1500) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: color,
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: time,
      timerProgressBar: true,
    });
    Toast.fire({ title, icon });
  }