# encoding: utf-8

require 'sinatra'

get '/' do
	"Servidor Sinatra Funcionando!"
end

get '/index' do
	@pages = Pages.all
	erb :'pages/index.html.erb'
end

get '/cadastro' do
	erb :'pages/cadastro.html.erb'
end

get '/login' do
	erb :'pages/login.html.erb'
end