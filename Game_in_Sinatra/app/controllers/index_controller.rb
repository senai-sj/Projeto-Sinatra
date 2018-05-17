get '/index' do
	@pages = Pages.all


	erb :'pages/index.html.erb'
end