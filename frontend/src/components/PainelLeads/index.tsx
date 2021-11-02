const PainelLeads = () => {
  return (
    <div className='container'>
      <h3>Painel de Leads</h3>
      <div className='d-flex justify-content-left mx-4 mb-4 mb-lg-6'>
        <button type='button' className='btn btn-primary btn-lg'>
          Novo Lead (+)
        </button>
      </div>
      <div className='text-center'>
        <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr className='table-dark'>
                <th>Cliente em Potencial</th>
                <th>Dados Confirmados</th>
                <th>Reunião Agendada</th>
              </tr>
            </thead>
            <tbody>
              <tr className='table-secondary'>
                <td>Org. Internacional</td>
                <td>Org. Internacional</td>
                <td>Org. Internacional</td>
              </tr>
              <tr className='table-light'>
                <td>Org. Internacional</td>
                <td>Org. Internacional</td>
                <td>Org. Internacional</td>
              </tr>
              <tr className='table-secondary'>
                <td>Org. Internacional</td>
                <td>Org. Internacional</td>
                <td>Org. Internacional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PainelLeads
