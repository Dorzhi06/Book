$('#1Quest').on('click', function(e)
{
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax
    ({
        url: './pages/Round_4/1Quest.html', 
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

$('#2Quest').on('click', function(e)
{
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax
    ({
        url: './pages/Round_4/2Quest.html', 
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

$('#1Quest2').on('click', function(e)
{
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax
    ({
        url: './pages/Round_4/1Quest.html', 
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

$('#2Quest2').on('click', function(e)
{
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax
    ({
        url: './pages/Round_4/2Quest.html', 
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

