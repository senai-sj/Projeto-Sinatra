# encoding: utf-8

require 'sinatra'
require 'find'

require_relative 'db/ranking'

get '/' do
	"Servidor Sinatra Funcionando!"
end

get '/index' do
	erb :index
end

get '/cadastro' do
	erb :cadastro
end

# get '/login' do
#	@views = get_files('/views')
#	erb :login
# end