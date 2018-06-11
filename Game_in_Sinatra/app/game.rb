# Application

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
	erb :home
end

get '/login' do
	@views = get_files('./views')
	erb :login
end

get '/cadastros' do
	@views = get_files('./views')
	erb :cadastros
end

get '/redefinir' do
	@views = get_files('./views')
	erb :redefinir
end

get '/menu' do
	@views = get_files('./views')
	erb :menu
end

get '/git' do
	@views = get_files('./views')
	erb :git
end