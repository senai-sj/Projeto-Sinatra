# Application

require 'sinatra'
require 'find'

##
# Método Responsável para acessar os caminhos dos diretórios HTML
# Utilizando um método find padrão para definir o parâmetro path.

def get_files(path)
	files = []
	Find.find(path) do |c|
		files << File.basename(c, ".erb") if !File.directory?(c)
	end
	return
end

##
# Métodos responsáveis para acessar as páginas na web.
# São as rotas do Software, responsáveis pelo redirecionamento.

get '/' do
	@views = get_files('./views')
	erb :home
end

get '/redefinir' do
	@views = get_files('./views')
	erb :redefinir
end

get '/cadastros' do
	@views = get_files('./views')
	erb :cadastros
end

get '/login' do
	@views = get_files('./views')
	erb :login
end

get '/jogo' do
	@views = get_files('./views')
	erb :jogo
end

get '/fases' do
	@views = get_files('./views')
	erb :fases
end

get '/menu' do
	@views = get_files('./views')
	erb :menu
end

get '/configuracoes' do
	@views = get_files('./views')
	erb :configuracoes
end

get '/creditos' do
	@views = get_files('./views')
	erb :creditos
end


get '/perfil' do
	@views = get_files('./views')
	erb :perfil
end

get '/lideres' do
	@views = get_files('./views')
	erb :lideres
end
