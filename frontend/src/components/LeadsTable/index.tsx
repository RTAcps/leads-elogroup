const LeadsTable = () => {
  return (
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
  )
}

export default LeadsTable
