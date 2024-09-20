interface Route {
    path: string,
    method: (div: HTMLDivElement) => void;
}

let routes: Route[] = [
    {
        path: "/",
        method: showHomePage

    },
    {
        path: "/login",
        method: showLoginPage
    }
];

function clearInnerHtml() {
    document.body.innerHTML = ""
}

function showLoginPage(divElement: HTMLDivElement) {
    // TODO mt-20 does not add margin
    let template = /*html*/`
        <div class="text-center d-flex justify-content-center align-items-center mt-20">
            <form class="form-signin">
                <img class="mb-4" src="../resources/mockup_logo.webp" alt="" width="120" height="auto">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <!-- <p class="mt-5 mb-3 text-muted">&copy;</p> -->
            </form>
        </div>
  `
    divElement.innerHTML = template
}

function showPageNotFound(divElement: HTMLDivElement) {
    // template from https://www.geeksforgeeks.org/how-to-create-404-error-page-in-bootstrap/
    let template = /*html*/`
        <div class="d-flex justify-content-center 
                    align-items-center">
          <div class="col-md-12 text-center">
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>
                  Sorry, the page you are looking
                  for does not exist.
              </p>
          </div>
      </div>`
    divElement.innerHTML = template
}

function showHomePage(divElement: HTMLDivElement) {
     let template = /*html*/`
        
        <div class="card" style="width: 18rem;">
            <img src="./resources/shawshank_redemption.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">The Shawshank Redemption</h5>
                <p class="card-text">A banker convicted of uxoricide forms a friendship over a quarter century with a
                    hardened convict, while maintaining his innocence and trying to remain hopeful through simple
                    compassion.</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>`
    divElement.innerHTML = template
}
function handleRoute() {
    const masterDivContainer = document.getElementById('master-container') as HTMLDivElement;
    // TODo raise error if divElement is not present..
    const currentPath = location.pathname;

    const currentRoute = routes.find(route => route.path === currentPath);

    if (currentRoute) {
        currentRoute.method(masterDivContainer);
    } else {
        showPageNotFound(masterDivContainer)
    }
}


window.addEventListener('popstate', handleRoute);
document.addEventListener('DOMContentLoaded', handleRoute);

// TODO?
function navigate(path: string) {
    history.pushState({}, '', path);
    handleRoute();
}