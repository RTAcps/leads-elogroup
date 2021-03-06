const SingUp = () => {
  return (
    <section className='vh-10'>
      <div className='container h-10'>
        <div className='row d-flex justify-content-center align-items-center h-10'>
          <div className='col-lg-12 col-xl-11'>
            <div className='card-body p-md-5'>
              <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-6 col-xl-5 order-2 order-lg-1'>
                  <form className='mx-1 mx-md-4'>
                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fas fa-user fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <label className='form-label' htmlFor='form3Example1c'>
                          Usuário *
                        </label>
                        <input
                          type='text'
                          id='form3Example1c'
                          className='form-control'
                        />
                      </div>
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <label className='form-label' htmlFor='form3Example4c'>
                          Password *
                        </label>
                        <input
                          type='password'
                          id='form3Example4c'
                          className='form-control'
                        />
                      </div>
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fas fa-key fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <label className='form-label' htmlFor='form3Example4cd'>
                          Confirmação Password *
                        </label>
                        <input
                          type='password'
                          id='form3Example4cd'
                          className='form-control'
                        />
                      </div>
                    </div>

                    <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                      <button type='button' className='btn btn-primary btn-lg'>
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
                <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingUp
