const NewLeads = () => {
  return (
    <div className='container'>
      <h3>Novo Lead</h3>
      <div className='row'>
        <form>
          <div className='col-sm-4'>
            <div className='1'>
              <label className='form-label' htmlFor='form3Example1c'>
                Nome *
              </label>
              <input type='text' className='form-control' />
            </div>
            <br />
            <label className='form-label' htmlFor='form3Example1c'>
              Telefone *
            </label>
            <div className='2'>
              <input type='tel' className='form-control' />
            </div>
            <br />
            <div className='3'>
              <label className='form-label' htmlFor='form3Example1c'>
                Email *
              </label>
              <input type='email' className='form-control' />
            </div>
          </div>
        </form>
        <div className='col-sm-4'>
          <label className='form-label' htmlFor='form3Example1c'>
            Oportunidades *
          </label>
          <div className='text-center'>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr className='table-dark'>
                    <th>
                      <div className='form'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='defaultCheck1'
                        />
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='table-secondary'>
                    <td>
                      <div className='foo'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='defaultCheck1'
                        />
                      </div>
                    </td>
                    <td>RPA</td>
                  </tr>
                  <tr className='table-light'>
                    <td>
                      <div className='foo'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='defaultCheck1'
                        />
                      </div>
                    </td>
                    <td>Produto Digital</td>
                  </tr>
                  <tr className='table-secondary'>
                    <td>
                      <div className='foo'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='defaultCheck1'
                        />
                      </div>
                    </td>
                    <td>Analytics</td>
                  </tr>
                  <tr className='table-light'>
                    <td>
                      <div className='foo'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='defaultCheck1'
                        />
                      </div>
                    </td>
                    <td>BPM</td>
                  </tr>
                  <tr className='table-secondary'>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
              <button type='button' className='btn btn-primary btn-lg'>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLeads
