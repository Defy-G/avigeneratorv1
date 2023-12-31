window.onload = function ()
        {

        // BACKGROUND
        var pixelbg = new Image();
        var pixelbgnum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of background files you have
        var pixelbgname="bg" + pixelbgnum + ".png";
        pixelbg.src=pixelbgname;

        // BODY
        var pixelbody = new Image();
        var pixelbodynum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of body files you have
        var pixelbodyname="body" + pixelbodynum + ".png";
        pixelbody.src=pixelbodyname;

        // EYES
        var pixeleyes = new Image();
        var pixeleyesnum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of eye files you have
        var pixeleyesname="eyes" + pixeleyesnum + ".png";
        pixeleyes.src=pixeleyesname;

        // HAIR
        var pixelhair = new Image();
        var pixelhairnum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of hair files you have
        var pixelhairname="hair" + pixelhairnum + ".png";
        pixelhair.src=pixelhairname;

        // MOUTH
        var pixelmouth = new Image();
        var pixelmouthnum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of mouth files you have
        var pixelmouthname="mouth" + pixelmouthnum + ".png";
        pixelmouth.src=pixelmouthname;

        // CLOTHES
        var pixelclothes = new Image();
        var pixelclothesnum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of clothe files you have
        var pixelclothesname="clothes" + pixelclothesnum + ".png";
        pixelclothes.src=pixelclothesname;

        // BACKGROUND
        var pixelbg = new Image();
        var pixelbgnum=Math.floor(Math.random()*12)+1; // change '12' to whatever number of background files you have
        var pixelbgname="bg" + pixelbgnum + ".png";
        pixelbg.src=pixelbgname;

        // BACKGROUND LOADED
        pixelbg.onload=function()
        {
            buildavatar();
        }

        // BODY LOADED
        pixelbody.onload=function()
        {
            buildavatar();
        }

        // EYES LOADED
        pixeleyes.onload=function()
        {
            buildavatar();
        }

        // HAIR LOADED
         pixelhair.onload=function()
        {
            buildavatar();
        }

        // MOUTH LOADED
        pixelmouth.onload=function()
        {
            buildavatar();
        }

        // CLOTHES LOADED
        pixelclothes.onload=function()
        {
            buildavatar();
        }

        function buildavatar()
        {
        var canvas=document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width=256;
        canvas.height=256;

        //DRAW BG
        ctx.drawImage(pixelbg,0,0);
        //DRAW BODY
        ctx.drawImage(pixelbody,0,0);
        //DRAW EYES
        ctx.drawImage(pixeleyes,0,0);
        //DRAW HAIR
        ctx.drawImage(pixelhair,0,0);
        //DRAW MOUTH
        ctx.drawImage(pixelmouth,0,0);
        //DRAW CLOTHES
        ctx.drawImage(pixelclothes,0,0);

        }

    }