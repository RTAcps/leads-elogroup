const Footer = () => {
  return (
    <div>
      <footer className='footer mt-auto py-3 bg-dark'>
        <div className='container'>
          <p className='text-light'>
            App desenvolvido por{' '}
            <a
              href='https://github.com/RTAcps/'
              target='_blank'
              rel='noreferrer'
            >
              RTAcps
            </a>
            <br />
            Instagram:{' '}
            <a
              href='https://www.instagram.com/rodrigo_teixeira_de_andrade/'
              target='_blank'
              rel='noreferrer'
            >
              @rodrigo_teixeira_de_andrade
            </a>
          </p>
          <p className='text-light'>
            <small>
              <strong>Desafio React Elogroup</strong>
              <br />
              LinkedIn:{' '}
              <a
                href='https://www.linkedin.com/in/rodrigo-teixeira-de-andrade/'
                target='_blank'
                rel='noreferrer'
              >
                Rodrigo Teixeira de Andrade
              </a>
            </small>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
