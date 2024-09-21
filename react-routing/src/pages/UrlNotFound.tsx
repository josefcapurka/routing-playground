// taken from https://www.geeksforgeeks.org/how-to-create-404-error-page-in-bootstrap/

export function UrlNotFound() {
    return (
        <div className="d-flex justify-content-center 
				align-items-center">
            <div className="col-md-12 text-center">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Sorry, the page you are looking
                    for does not exist.
                </p>
            </div>
        </div>

    )
}