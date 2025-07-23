import "./Admin.css"

function Admin() {
    return (
        <div className="page admin">

            <h1>Admin Page</h1>

            <div className="form">
                <h5 className="mb-4 text-center">Product</h5>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" />
                </div>
                <button type="button" className="btn btn-primary">
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default Admin;