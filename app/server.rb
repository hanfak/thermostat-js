# require 'pry'

#require_relative 'model/temp'
 require 'sinatra'
 require 'json'
  require 'sinatra/base'

class Temperature <Sinatra::Base


  get ("/") do
    send_file "index.html"
  end

  # post ('/set') do
  # end
#   get ('/set') do

    
# response.headers['Access-Control-Allow-Origin'] = '*'
#     {degress: 20.to_s}.to_json
#   end


#   post "/temperature" do

#   response.headers['Access-Control-Allow-Origin'] = '*'
#    p params
#    #Temperature.create(temperature: params[:temperature].to_i)
#  end

end