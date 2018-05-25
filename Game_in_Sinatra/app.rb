# encoding: utf-8

require 'sinatra'
require 'find'

def get_files(path)
	files = []
	Find.find(path) do |c|
		files << File.basename(c, ".erb") if !File.directory?(c)
	end
	return
end

get '/' do
	@views = get_files('./views')
	"Servidor Sinatra Funcionando!"
end

get '/index' do
	@views = get_files('./views')
	erb :'pages/index.html.erb'
end

get '/cadastro' do
	@views = get_files('./views')
	erb :'pages/cadastro.html.erb'
end

get '/login' do
	@views = get_files('./views')
	erb :'pages/login.html.erb'
end
