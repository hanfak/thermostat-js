require 'sinatra'
require 'json'

class Themostat < Sinatra::Base
  enable :sessions

  get '/' do

    {temperature: session[:temperature]}.to_json
    erb(:index)
  end

  post '/temperature' do
    p session[:temperature] = params[:temperature]
  end

  run! if app_file == $0
end
