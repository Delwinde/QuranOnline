function changeText2(){
        var userInput1 = document.getElementById('userInput1').value;
        var userInput2 = document.getElementById('userInput2').value;
    
        var lnk = document.getElementById('lnk');
        if (userInput1 > 0 && userInput1 < 10 && userInput2 > 0 && userInput2 < 10)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + "00" + userInput1 + "00" + userInput2 + ".mp3";
        }
        else if (userInput1 > 0 && userInput1 < 10 && userInput2 > 9 && userInput2 < 100)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + "00" + userInput1 + "0" + userInput2 + ".mp3";
        }
        else if (userInput1 > 0 && userInput1 < 10 && userInput2 > 99)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + "00" + userInput1 + userInput2 + ".mp3";
        }


        else if (userInput1 > 9 && userInput1 < 100 && userInput2 > 0 && userInput2 < 10)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + "0" + userInput1 + "00" + userInput2 + ".mp3";
        }
        else if (userInput1 > 9 && userInput1 < 100 && userInput2 > 9 && userInput2 < 100)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + "0" + userInput1 + "0" + userInput2 + ".mp3";
        }
        else if (userInput1 > 9 && userInput1 < 100 && userInput2 > 99)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + "0" + userInput1 + userInput2 + ".mp3";
        }

        else if (userInput1 > 99 && userInput2 > 0 && userInput2 < 10)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + userInput1 + "00" +userInput2 + ".mp3";
        }
        else if (userInput1 > 99 && userInput2 > 9 && userInput2 < 100)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + userInput1 + "0"+userInput2 + ".mp3";
        }
        else if (userInput1 > 99 && userInput2 > 99)
        {
            lnk.href ="https://everyayah.com/data/Alafasy_128kbps/" + userInput1 + userInput2 + ".mp3";
        }
        lnk.innerHTML = lnk.href;
        window.open(lnk, '_blank');

    }
    function changeText1(){
        var userInput1 = document.getElementById('userInput1').value;
        var userInput2 = document.getElementById('userInput2').value;
    
        var lnk = document.getElementById('lnk');
        lnk.href = "https://everyayah.com/data/images_png/" +userInput1+"_"+userInput2+".png";
        lnk.innerHTML = lnk.href;
        window.open(lnk, '_blank');
            }
    
