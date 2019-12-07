function ContactContent() {
    const element = document.createElement('div');
    element.className = 'container';
    element.setAttribute('style', 'margin-top: 5rem');

    const contactHeader = document.createElement('h1');
    contactHeader.className = 'text-center text-primary';
    contactHeader.textContent = 'Our Contact';
    element.appendChild(contactHeader);

    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
        <div class="col-md-6 offset-md-3 contact-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="text-center">Location:</h4>
                    <p class="text-center">Maitama, Abuja</p>
                    <h4 class="text-center">Tel:</h4>
                    <p class="text-center">+2348162093847</p>
                    <h4 class="text-center">Email:</h4>
                    <p class="text-center">cidachickenfries@restaurant.com</p>
                    <p class="text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#formModal">Contact Us</button></p>

                    <!--  Modal  -->
                    <div class="modal fade" id="formModal" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Contact Us</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="form-group">
                                            <label for="">Name:</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Email:</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Comment:</label>
                                            <textarea class="form-control" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    element.appendChild(row);

    return element;
}

export default ContactContent;