   var username = '';
   function send_message(message) {
      var prevState = $('#container').html();
      if (prevState.length > 30) {
          prevState = prevState + '<br/>';
      }
      $('#container').html(prevState +'<span class=current_message>'+'<span class=bot>chatbot : </span>'+ message + '<cpan/>'); //isichat

      $('.current_message').hide();
      $('.current_message').delay(500).fadeIn();
      $('.current_message').removeClass('current_message');

   }
   function get_username() {
       send_message('hello ,what is your name?');
   }
   function ai(message) {
      if (username.length < 3) {
         username = message;
         send_message('nice to meet you '+username+' , how are you?');
      }
      if (message.indexOf('how are you?') >= 0) {
         send_message("im fine ,thank's you");
      }
      if ((message.indexOf('time') >= 0) || (message.indexOf('hours') >= 0) ) {
         var date = new Date();
         var hours = date.getHours();
         var minutes = date.getMinutes();
         send_message('current time is , '+hours+':'+minutes);
      }
   }

       $(function() {
          get_username();

           $('#txtchat').keypress(function(event) { // fungsi key enter
               if (event.which == 13) {
                   if ($('#checkbox').prop('checked')) {
                       $('#send').click();
                       event.preventDefault(); // ke default
                   }
               }
           });
           // kirim
           $('#send').click(function() {
               var username = '<span class = username >You : </span>'
               var newMessage = $('#txtchat').val();
               $('#txtchat').val('');
               //membuat chat tidak rewrite start
               var prevState = $('#container').html();
               console.log(prevState.length);
               if (prevState.length > 3) {
                   prevState = prevState + '<br/>';
               }
               $('#container').html(prevState + username + newMessage); //isichat
               //membuat chat tidak rewrite end

               var containerheight = $('#container').prop('scrollHeight'); //scroll
               $('#container').scrollTop(containerheight);

               ai(newMessage);
           });

       })
