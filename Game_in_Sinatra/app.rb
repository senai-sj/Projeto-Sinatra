# encoding: utf-8

require 'sinatra'
require 'find'
set :views, 'views/pages'

def get_files(path)
	files = []
	Find.find(path) do |c|
		files << File.basename(c, ".erb") if !File.directory?(c)
	end
	return
end

get '/' do
	"Servidor Sinatra Funcionando!"
end

get '/index' do
	erb :'index'
end

get '/cadastro' do
	erb :'cadastro'
end

# get '/login' do
#	@views = get_files('/views')
#	erb :'login'
# end