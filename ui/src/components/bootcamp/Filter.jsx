import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Filter() {
    return (
        <>
            <h4>Filter</h4>
            <form>

                <div className="form-group">
                    <label> Rating</label>
                    <Form.Select aria-label="Default select example" className='custom-select mb-2'>
                        <option value="any" selected>
                            Any
                        </option>
                        <option value="9">9+</option>
                        <option value="8">8+</option>
                        <option value="7">7+</option>
                        <option value="6">6+</option>
                        <option value="5">5+</option>
                        <option value="4">4+</option>
                        <option value="3">3+</option>
                        <option value="2">2+</option>
                    </Form.Select>
                </div>

                <div className="form-group">
                    <label> Budget</label>
                    <Form.Select aria-label="Default select example" className='custom-select mb-2'>
                        <option value="any" selected>
                            Any
                        </option>
                        <option value="20000">$20,000</option>
                        <option value="15000">$15,000</option>
                        <option value="10000">$10,000</option>
                        <option value="8000">$8,000</option>
                        <option value="6000">$6,000</option>
                        <option value="4000">$4,000</option>
                        <option value="2000">$2,000</option>
                    </Form.Select>
                </div>
                <Button type="submit" className="btn btn-primary btn-block">Find Bootcamps</Button>
            </form>
        </>
    );
};

export default Filter;