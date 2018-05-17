get '/cadastro' do
	@pages = Pages.all


	erb :'pages/cadastro.html.erb'
end