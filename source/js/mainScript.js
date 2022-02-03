    // Введение
    //Основные термины

    $('#mainTermin').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/foreword/mainTermin.html', 
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

    // Компоненты встроенных систем
    $('#systemComponents').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/foreword/systemComponents.html', 
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

    // Микроконтроллеры
    $('#microControllers').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/foreword/microControllers.html', 
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

    // Программирование микроконтролеров
    $('#programmerControllers').on('click', function(e)
    {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax
        ({
            url: './pages/foreword/programmerControllers.html', 
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