    $('#mainFunction').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/1_mainFunction.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#massiveAndString').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/2_massiveAndString.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#inputAndOutput').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/3_inputAndOutput.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#writeData').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/4_writeData.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#jopWithDisp').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/5_jopWithDisp.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#standartBibl').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/6_standartBibl.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    // Версия для ПК

    $('#mainFunction2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/1_mainFunction.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#massiveAndString2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/2_massiveAndString.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#inputAndOutput2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/3_inputAndOutput.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#writeData2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/4_writeData.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#jopWithDisp2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/5_jopWithDisp.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });

    $('#standartBibl2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_3/6_standartBibl.html', 
            type: 'GET',
            success: function(responce)
            {        
                $('#ShowPage').html(responce); 
            },
            error: function()
            {
                alert('Error!');            
            }
        });
    });