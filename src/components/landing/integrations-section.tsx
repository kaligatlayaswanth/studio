const IntegrationLogo = ({ children, name }: { children: React.ReactNode; name: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-primary/50">
    {children}
    <span className="text-sm text-muted-foreground">{name}</span>
  </div>
);

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 lg:py-32 bg-transparent">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Seamless Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Your AI Automation Partner. We connect with the tools you already use.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          <IntegrationLogo name="Gmail">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H1.5C.65 21 0 20.35 0 19.5v-15C0 3.65.65 3 1.5 3h21c.85 0 1.5.65 1.5 1.5zM22.5 6l-10.5 7-10.5-7V4.5h21V6z" />
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="Slack">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.527 2.527 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1 2.521-2.52A2.528 2.528 0 0 1 13.876 5.042a2.528 2.528 0 0 1-2.52 2.521h-2.522V5.042zM8.834 6.313a2.528 2.528 0 0 1-2.52 2.521 2.528 2.528 0 0 1-2.522-2.521V3.792A2.528 2.528 0 0 1 3.792 1.27 2.528 2.528 0 0 1 6.313 3.792v2.521zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.522 2.52A2.528 2.528 0 0 1 21.478 11.356h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523-2.52A2.528 2.528 0 0 1 17.688 3.792h6.313A2.528 2.528 0 0 1 24 6.313a2.528 2.528 0 0 1-2.522 2.521h-3.79zM15.165 18.956a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.521-2.523 2.528 2.528 0 0 1 2.521-2.52h2.52v2.52zM15.165 17.688a2.528 2.528 0 0 1 2.521 2.522 2.528 2.528 0 0 1-2.521 2.521h-6.313a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.522h3.79v-2.521z" />
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="Notion">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
              <path d="M22.512 4.625H1.488c-.822 0-.822 1.25 0 1.25h3.337v13.5H1.488c-.822 0-.822 1.25 0 1.25h21.024c.822 0 .822-1.25 0-1.25h-3.337V5.875h3.337c.822 0 .822-1.25 0-1.25zM8.075 18.125V5.875h4.337l3.225 4.35V18.125H8.075z" />
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="Discord">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.369-.42.738-.609 1.1-.319.622-.579 1.23-1.029 2.245a18.331 18.331 0 0 0-4.432 0 16.275 16.275 0 0 0-1.03-2.245c-.19-.362-.4-.73-.609-1.1a.074.074 0 0 0-.079-.037A19.791 19.791 0 0 0 3.683 4.37a.074.074 0 0 0-.04.058A18.426 18.426 0 0 0 3.06 9.69c-.06.402-.109.796-.15 1.182-.01.065-.01.121 0 .185a15.402 15.402 0 0 0 2.2 4.885 1.48 1.48 0 0 0 .86.518c.27.087.56.146.85.175.29.03.58.019.86-.028.39-.074.78-.204 1.14-.389a.608.608 0 0 0 .28-.448 6.56 6.56 0 0 1-.22-1.182 10.872 10.872 0 0 0 2.22 0c.1.411.18.813.22 1.182a.606.606 0 0 0 .28.448c.36.185.75.315 1.14.389.28.047.57.058.86.028.29-.03.58-.086.85-.175a1.48 1.48 0 0 0 .86-.518 15.402 15.402 0 0 0 2.2-4.885c.01-.064.01-.12 0-.185a16.094 16.094 0 0 0-.58-5.323.074.074 0 0 0-.04-.058zM8.657 14.836c-.76 0-1.39-1.378-1.39-3.065 0-1.686.63-3.065 1.39-3.065.77 0 1.39 1.379 1.39 3.065 0 1.687-.62 3.065-1.39 3.065zm6.686 0c-.76 0-1.39-1.378-1.39-3.065 0-1.686.63-3.065 1.39-3.065.77 0 1.39 1.379 1.39 3.065 0 1.687-.62 3.065-1.39 3.065z" />
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="HubSpot">
             <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
                <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.32 10.512c-.528-.528-.936-1.2-1.2-1.92h-5.4v6.816h2.232v-3.48h1.128l1.968 3.48h2.592l-2.4-4.08c.312-.6.48-1.272.48-1.8z" />
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="Telegram">
             <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.202-.82 1.23-.696.06-1.225-.46-1.897-.91-1.056-.71-1.653-1.164-2.678-1.8-1.185-.71-2.099-1.424-1.85-2.25.048-.19.237-.376.413-.532 1.838-1.682 3.23-2.937 4.542-4.11.002-.002.004-.004.005-.006.007-.008.015-.015.022-.023a.81.81 0 0 1 .094-.097.204.204 0 0 1 .11-.04c.04-.01.062-.016.108-.016z"/>
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="Airtable">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
                <path d="M4.625 15.352l7.327-12.75h4.12l-7.327 12.75zm3.876 8.353l6.578-11.43h4.316l-6.578 11.43zm-8.5.295h11.43v-3.72H0z"/>
            </svg>
          </IntegrationLogo>
          <IntegrationLogo name="LinkedIn">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </IntegrationLogo>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
