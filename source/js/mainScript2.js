    $('#Board').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/1Board.html', 
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

    $('#IDE').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/2IDE.html', 
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

    $('#setupIDE').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/3setupIDE.html', 
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

    $('#online').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/4online.html', 
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

    $('#code').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/5code.html', 
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

    $('#structure').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/6structure.html', 
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


    $('#Board2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/1Board.html', 
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

    $('#IDE2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/2IDE.html', 
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

    $('#setupIDE2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/3setupIDE.html', 
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

    $('#online2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/4online.html', 
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

    $('#code2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/5code.html', 
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

    $('#structure2').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/Round_2/6structure.html', 
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