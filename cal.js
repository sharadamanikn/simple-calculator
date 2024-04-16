
            
            function clearscreen(){
                document.getElementById("res").value="";
            }
            function display(value){
                   document.getElementById("res").value+=value;//+= is used for concatenation of the selected numbers
            }
            function calculate()
            {
                var p=document.getElementById("res").value;
                var q=eval(p);
                document.getElementById("res").value=q;
            }

        

