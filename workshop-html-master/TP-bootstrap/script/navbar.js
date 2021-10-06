var insertNavBar = function (el) {
  el.append(`        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid fs-2" >
                <!-- fs = font-size -->
                <a class="navbar-brand fs-1" href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank">
                <i class="bi bi-bootstrap-fill" style="color:blueviolet"></i>
                    Bootstrap</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarID">
                    <ul class="navbar-nav ">
                       <li class="nav-item">
                           <a class="nav-link active" aria-current="page" href="./navbar.html">navBar</a>
                       </li>
                       <li class="nav-item">
                           <a href="#" class="nav-link">Formulaire</a>
                       </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">card</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">dropdown</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>`);
};

$(function () {
  insertNavBar($("header"));
});
