

/////////////////////////register submit///////////////////////////////////////////////////////
$('.register-form').on('submit',function(){
	var isValid = true;

			//dieu kien cho user-name
			if($('#user-name').val().trim() == ''){
				$('#user-name').next('span').text('bạn thiếu tên rùi nè!!!');
				isValid = false;
			}else{
				$('#user-name').next('span').text('');
			}

			//dieu kien cho password
			if ($('#password').val().trim() == ''){
				$('#password').next('span').text('bạn thiếu mật khẩu rùi nè!!!');
			isValid = false;
			}else if($('#password').val().match(/^(?=.*\d).{6,18}$/) == null){
			$('#password').next('span').text('ít nhất 6 kí tự và cần ít nhất 1 số.');
			isValid = false;
			}
			else{
			$('#password').next('span').text('');
			}


			//dieu kien cho email
			if($('#email').val().trim() == ''){
			   $('#email').next('span').text('bạn thiếu email nữa nè!!!');
			isValid = false;	
			} 
			else if($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
				$('#email').next('span').text('Invalid!!!'+  'Example:abc@gmail.com');
			isValid = false;	
			}else{
			$('#email').next('span').text('');
			}


			//dieu kien cho so dt
			if($('#phone').val().trim() == ''){
				$('#phone').next('span').text('Bạn thiếu cả số điện thoại nữa!!!');
			isValid = false;
			}else if($('#phone').val().match(/^[0]\d{2}\d{3}\d{4}$/) == null){
					$('#phone').next('span').text('Không đúng!!!.'+'Example:012345678')
				isValid = false;
			}
			else{
				$('#phone').next('span').text('');
			}
			//dieu kien cho nam sinh

			if($('#year').val().trim() == ''){
				$('#year').next('span').text('nhập ngày sinh đi bạn ơi!!!');
				isValid = false;		
			}else{
				$('#year').next('span').text('');
			}

		return isValid;
});

///////////////////////// login submit ///////////////////////////////////////////////////////
